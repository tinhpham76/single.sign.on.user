FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
EXPOSE 80
EXPOSE 443

WORKDIR /app

COPY ["./src/", "src/"]

RUN dotnet restore "src/Single.Sign.On.User.csproj"

WORKDIR "/app/src"
RUN dotnet build "Single.Sign.On.User.csproj" -c Release -o /app/build
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y build-essential nodejs

FROM build AS publish
RUN dotnet publish "Single.Sign.On.User.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:5.0
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Single.Sign.On.User.dll"]