var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddWebOptimizer(pipeline =>
{
    pipeline.AddCssBundle("/css/angular/styles.css", "angular_build/styles.*.css");
    pipeline.AddJavaScriptBundle("/js/angular_hello_world.js", "angular_build/hello_world.*.js", "");
    pipeline.AddJavaScriptBundle("/js/angular_common.js", "angular_build/pollyfills.*.js", "angular_build/runtime.*.js");
    pipeline.MinifyJsFiles();
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseWebOptimizer();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();