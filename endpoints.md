# Financer API endpoints

## Usuarios  

### <span style="color:#2278ff">POST</span> Iniciar Sesión  
>/api/usuarios/login

Body:
```json
{
    "email":string,
    "pwd":string
}
```
Response:  
+ HTTP 200:  
```json
{
    "token":string
}
```
+ HTTP 400:  
```json
{
    "error":string
}
```
### <span style="color:#2278ff">POST</span> Crear Usuario  
> /api/usuarios/new  

Body:
```json
{
    "email":string,
    "pwd":string,
    "nombre":string
}
```
Response:  
+ HTTP 200:  

+ HTTP 400:  
```json
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
```json
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
```json
{
    "error":string
}
```
### <span style="color:green">GET</span> Usuario  
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
```
Response:  
+ HTTP 200:  
```json
{
    "id":long,
    "email":string,
    "nombre":string,
    "activo":bool
}
```
+ HTTP 400:  
```json
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
```json
{
    "id":long
}
```
+ HTTP 400:  
```json
{
    "error":string
}
```
### <span style="color:green">GET</span> Listar Usuarios  
> /api/usuarios/
#### Authorization: Bearer Token
Response:  
+ HTTP 200:  
```json
{
    "usuarios":[
        {
            "id":long,
            "email":string,
            "nombre":string,
            "activo":bool
        }
    ]
}
```
+ HTTP 400:  
```json
{
    "error":string
}
```
## Cuentas  

### <span style="color:green">GET</span> Listar Cuentas  
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/cuentas
#### Authorization: Bearer Token
Parameters:
```
id_usuario:long
```
Response:  
+ HTTP 200:  
```json
{
    "cuentas":[
        {
            "id":long,
            "codigo":string,
            "nombre":string,
            "tipo":int,
            "saldo":double
        }
    ]
}
```
+ HTTP 400:  
```json
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
```json
{
    "codigo":string?,
    "nombre":string,
    "tipo":int,
    "saldo":double?
}
```
Response:  
+ HTTP 200:  
```json
{
    "id":long
}
```
+ HTTP 400:  
```json
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
```json
{
    "codigo":string,
    "nombre":string,
    "tipo":int
}
```
Response:  
+ HTTP 200:  

+ HTTP 400:  
```json
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
```json
{
    "id":long
}
```
+ HTTP 400:  
```json
{
    "error":string
}
```
## Movimientos  

### <span style="color:green">GET</span> Listar Movimientos  
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/movimientos
#### Authorization: Bearer Token
Parameters:
```
id_usuario:long
```
Response:  
+ HTTP 200:  
```json
{
    "movimientos":[
        {
            "cuenta":long,
            "destino":long?,
            "tipo":int,
            "comentario":string?,
            "fecha":datetime,
            "monto":double
        }
    ]
}
```
+ HTTP 400:  
```json
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
```json
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
```json
{
    "id":long
}
```
+ HTTP 400:  
```json
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
```json
{
    "comentario":string,
    "fecha":datetime,
    "monto":double
}
```
Response:  
+ HTTP 200:  

+ HTTP 400:  
```json
{
    "error":string
}
```
### <span style="color:red">DELETE</span> Eliminar Movimiento  
> /api/usuarios/<span style="color:#ffff00">_id_usuario_</span>/movimientos/<span style="color:#ffff00">_id_movimiento_</span>
#### Authorization: Bearer Token  
Parameters:
```
id_usuario:long
id_movimiento:long
```
Response:  
+ HTTP 200:  
```json
{
    "id":long
}
```
+ HTTP 400:  
```json
{
    "error":string
}
```