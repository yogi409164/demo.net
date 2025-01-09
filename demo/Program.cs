var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllersWithViews(); // MVC setup
builder.Services.AddEndpointsApiExplorer(); // For API documentation (Swagger support)

// Add session support
builder.Services.AddDistributedMemoryCache(); // Required for session storage
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30); // Session timeout
    options.Cookie.HttpOnly = true; // Secure session cookie
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts(); // Enforces HTTP Strict Transport Security in production
}

app.UseHttpsRedirection();
app.UseStaticFiles(); // Serve static files (CSS, JS, etc.)

app.UseRouting();

// Enable session middleware (before UseAuthorization)
app.UseSession();

app.UseAuthorization(); // Enable Authorization (if needed)

// Map default controller routes for MVC (default page)
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// Map API controllers routes (API-specific routes)
app.MapControllers(); // This maps API controllers like AuthController

app.Run();
