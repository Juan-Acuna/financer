# Financer API endpoints

## Usuarios  

### <span style="color:green">GET</span> Usuario  
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
```
Responses:  
+ HTTP 200:  
```
{
    "id":long,
    "email":string,
    "nombre":string,
    "activo":bool,
    "validado":bool
}
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:green">GET</span> Listar Usuarios  
> /api/usuarios/
#### Authorization: Bearer Token
Responses:  
+ HTTP 200:  
```
[
    {
        "id":long,
        "email":string,
        "nombre":string,
        "activo":bool,
        "validado":bool
    }
]
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:#2278ff">POST</span> Nuevo Usuario  
> /api/usuarios/  

Body:
```
{
    "email":string,
    "pwd":string,
    "nombre":string
}
```
Responses:  
+ HTTP 200:  
```
{
    "id":long
}
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:#ff78ff">PATCH</span> Actualizar Usuario  
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
```
Body:
```
{
    "email":string,
    "pwd":string,
    "nombre":string,
    "activo":bool
}
```
Responses:  
+ HTTP 200:  

+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:red">DELETE</span> Eliminar Usuario  
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
```
Responses:  
+ HTTP 200:  
```
{
    "id":long
}
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:#2278ff">POST</span> Iniciar Sesión  
>/api/usuarios/login

Body:
```
{
    "email":string,
    "pwd":string
}
```
Responses:  
+ HTTP 200:  
```
{
    "token":string
}
```
+ HTTP 401:  
```
{
    "id":long
}
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:#2278ff">POST</span> Validar Correo  
>/api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/validar
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
```
Body:
```
{
    "code":int
}
```
Responses:  
+ HTTP 200:  
```
{
    "token":string
}
```
+ HTTP 400:  
```
{
    "error":string
}
```

## Cuentas  

### <span style="color:green">GET</span> Cuenta  
> /api/cuentas/<span style="color:#ffff00">_id_cuenta_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_cuenta:long
```
Responses:  
+ HTTP 200:  
```
{
    "id":long,
    "usuario":long,
    "codigo":string,
    "nombre":string,
    "tipo":int,
    "saldo":double
}
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:green">GET</span> Listar Cuentas  
> /api/cuentas
#### Authorization: Bearer Token
Responses:  
+ HTTP 200:  
```
[
    {
        "id":long,
        "usuario":long,
        "codigo":string,
        "nombre":string,
        "tipo":int,
        "saldo":double
    }
]
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:#2278ff">POST</span> Nueva Cuenta  
> /api/cuentas/
#### Authorization: Bearer Token
Body:
```
{
    "codigo":string?,
    "usuario":long,
    "nombre":string,
    "tipo":int,
    "saldo":double?
}
```
Responses:  
+ HTTP 200:  
```
{
    "id":long
}
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:#ff78ff">PATCH</span> Actualizar Cuenta  
> /api/cuentas/<span style="color:#ffff00">_id_cuenta_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_cuenta:long
```
Body:
```
{
    "codigo":string,
    "nombre":string,
    "tipo":int
}
```
Responses:  
+ HTTP 200:  

+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:red">DELETE</span> Eliminar Cuenta  
> /api/cuentas/<span style="color:#ffff00">_id_cuenta_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_cuenta:long
```
Responses:  
+ HTTP 200:  
```
{
    "id":long
}
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:green">GET</span> Listar Cuentas del Usuario  
> /api/cuentas/usuario/<span style="color:#ffff00">_id_usuario_</span>
#### Authorization: Bearer Token
Parameters:
```
id_usuario:long
```
Responses:  
+ HTTP 200:  
```
[
    {
        "id":long,
        "usuario":long,
        "codigo":string,
        "nombre":string,
        "tipo":int,
        "saldo":double
    }
]
```
+ HTTP 400:  
```
{
    "error":string
}
```

## Movimientos  

### <span style="color:green">GET</span> Movimiento  
> /api/movimientos/<span style="color:#ffff00">_id_movimiento_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_movimiento:long
```
Responses:  
+ HTTP 200:  
```
{
    "id":long,
    "cuenta":long,
    "usuario":long,
    "destino":long?,
    "tipo":int,
    "comentario":string?,
    "fecha":datetime,
    "monto":double
}
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:green">GET</span> Listar Movimientos  
> /api/movimientos
#### Authorization: Bearer Token
Responses:  
+ HTTP 200:  
```
[
    {
        "id":long,
        "cuenta":long,
        "usuario":long,
        "destino":long?,
        "tipo":int,
        "comentario":string?,
        "fecha":datetime,
        "monto":double
    }
]
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:#2278ff">POST</span> Nuevo Movimiento  
> /api/movimientos/
#### Authorization: Bearer Token
Body:
```
{
    "cuenta":long,
    "usuario":long,
    "destino":long?,
    "tipo":int,
    "comentario":string?,
    "fecha":datetime?,
    "monto":double
}
```
Responses:  
+ HTTP 200:  
```
{
    "id":long
}
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:#ff78ff">PATCH</span> Actualizar Movimiento  
> /api/movimientos/<span style="color:#ffff00">_id_movimiento_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_movimiento:long
```
Body:
```
{
    "comentario":string,
    "fecha":datetime,
    "monto":double
}
```
Responses:  
+ HTTP 200:  

+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:red">DELETE</span> Eliminar Movimiento  
> /api/movimientos/<span style="color:#ffff00">_id_movimiento_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_movimiento:long
```
Responses:  
+ HTTP 200:  
```
{
    "id":long
}
```
+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:green">GET</span> Listar Movimientos del Usuario  
> /api/movimientos/usuario/<span style="color:#ffff00">_id_usuario_</span>
#### Authorization: Bearer Token
Parameters:
```
id_usuario:long
```
Responses:  
+ HTTP 200:  
```
[
    {
        "id":long,
        "cuenta":long,
        "destino":long?,
        "tipo":int,
        "comentario":string?,
        "fecha":datetime,
        "monto":double
    }
]
```
+ HTTP 400:  
```
{
    "error":string
}
```