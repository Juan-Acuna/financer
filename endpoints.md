# Financer API endpoints

## Usuarios  

### <span style="color:green">GET</span> Usuario  
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
```
Response:  
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
Response:  
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
> /api/usuarios/new  

Body:
```
{
    "email":string,
    "pwd":string,
    "nombre":string
}
```
Response:  
+ HTTP 200:  

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
Response:  
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
Response:  
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
Response:  
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
Response:  
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
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/cuentas/<span style="color:#ffff00">_id_cuenta_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
id_cuenta:long
```
Response:  
+ HTTP 200:  
```
{
    "id":long,
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
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/cuentas
#### Authorization: Bearer Token
Parameters:
```
id_usuario:long
```
Response:  
+ HTTP 200:  
```
[
    {
        "id":long,
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
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/cuentas/new
#### Authorization: Bearer Token
Parameters:
```
id_usuario:long
```
Body:
```
{
    "codigo":string?,
    "nombre":string,
    "tipo":int,
    "saldo":double?
}
```
Response:  
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
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/cuentas/<span style="color:#ffff00">_id_cuenta_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
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
Response:  
+ HTTP 200:  

+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:red">DELETE</span> Eliminar Cuenta  
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/cuentas/<span style="color:#ffff00">_id_cuenta_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
id_cuenta:long
```
Response:  
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

## Movimientos  

### <span style="color:green">GET</span> Movimiento  
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/movimientos/<span style="color:#ffff00">_id_movimiento_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
id_movimiento:long
```
Response:  
+ HTTP 200:  
```
{
    "id":long,
    "cuenta":long,
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
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/movimientos
#### Authorization: Bearer Token
Parameters:
```
id_usuario:long
```
Response:  
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
### <span style="color:#2278ff">POST</span> Nuevo Movimiento  
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/movimientos/new
#### Authorization: Bearer Token
Parameters:
```
id_usuario:long
```
Body:
```
{
    "cuenta":long,
    "destino":long?,
    "tipo":int,
    "comentario":string?,
    "fecha":datetime?,
    "monto":double
}
```
Response:  
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
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/movimientos/<span style="color:#ffff00">_id_movimiento_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
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
Response:  
+ HTTP 200:  

+ HTTP 400:  
```
{
    "error":string
}
```
### <span style="color:red">DELETE</span> Eliminar Movimiento  