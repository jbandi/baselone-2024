# Blazor Demos

Blazor Server:

```bash
dotnet new blazor -o BlazorApp
cd BlazorApp
dotnet watch

dotnet publish -c Release
cd ./bin/net8.0/publish
dotner CoutnerApp.dll
```

http://localhost:5000/

https://dotnet.microsoft.com/en-us/learn/aspnet/blazor-tutorial/create



Blazor WebAssembly:

```
dotnet new blazorwasm -o BlazorApp
cd BlazorApp
dotnet watch

dotnet publish -c Release
cd ./bin/met8.0/publish/wwwroot
npx serve . -s
```



AOT Compilation: 
https://learn.microsoft.com/en-us/aspnet/core/blazor/host-and-deploy/webassembly?view=aspnetcore-8.0#ahead-of-time-aot-compilation