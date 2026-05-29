# PERUSURF - Tienda de Surf en Punta Hermosa

## Credenciales de acceso (Login demo)
- Correo: admin@perusurf.pe
- Contrasena: admin123

## Comandos para iniciar el proyecto

Terminal 1 - JSON Server (backend simulado):
  npx json-server --watch db.json --port 3000

Terminal 2 - Angular:
  ng serve

## Estructura del proyecto

```
perusurf/
|-- db.json                          <- Base de datos JSON Server
|-- src/
    |-- main.ts                      <- Punto de entrada Angular
    |-- index.html                   <- HTML raiz con Bootstrap 5 CDN
    |-- styles.css                   <- Estilos globales y variables CSS
    |-- app/
        |-- app.component.*          <- Componente raiz (Navbar + Outlet + Footer)
        |-- app.config.ts            <- Configuracion: provideRouter, provideHttpClient
        |-- app.routes.ts            <- Rutas con lazy loading y authGuard
        |-- guards/
        |   |-- auth.guard.ts        <- Guard funcional: verifica perusurf_token
        |-- models/
        |   |-- producto.model.ts    <- Interface Producto
        |-- services/
        |   |-- producto.service.ts  <- HttpClient -> GET /productos
        |-- components/
        |   |-- navbar/              <- Navbar reutilizable con routerLink
        |   |-- footer/              <- Footer reutilizable
        |-- pages/
            |-- home/                <- Pagina principal con hero y categorias
            |-- productos/           <- Catalogo dinamico con filtro por categoria
            |-- ofertas/             <- Ofertas con descuentos del 30%
            |-- contacto/            <- Formulario de contacto con Two-Way Binding
            |-- login/               <- Login con localStorage y redireccion
            |-- dashboard/           <- Panel protegido (authGuard + ngOnInit check)
            |-- mi-cuenta/           <- Perfil del usuario autenticado
            |-- not-found/           <- Pagina 404 personalizada
```

## Elementos Angular implementados

### Data Binding
- Interpolacion {{ }}: titulos, precios, nombres, estadisticas
- Property Binding [src]: imagenes de productos; [disabled]: botones segun stock
- Event Binding (click): filtros, cerrar sesion, toggle menu
- Two-Way Data Binding [(ngModel)]: login, contacto, busqueda en productos

### Directivas Estructurales
- *ngFor: iteracion de productos, categorias, pedidos, ofertas
- *ngIf: mostrar/ocultar elementos segun estado (sesion, errores, carga)

### Directivas de Atributos
- [ngClass]: bordes de cards segun stock, botones de categoria activa, estado de pedidos
- [ngStyle]: colores de marca en multiples componentes, precios destacados

### Pipes
- CurrencyPipe: precios en soles (PEN) en productos, ofertas y dashboard
- UpperCasePipe: titulos de secciones en home, productos, ofertas, dashboard

### Servicio REST
- ProductoService con HttpClient.get<Producto[]>() apuntando a http://localhost:3000/productos

### Autenticacion y LocalStorage
- Login guarda perusurf_token y perusurf_usuario en localStorage
- Dashboard y Mi Cuenta verifican token en ngOnInit y redirigen a /home si no existe
- authGuard funcional protege /dashboard y /mi-cuenta a nivel de ruta
- Boton cerrar sesion limpia localStorage y redirige a /login
