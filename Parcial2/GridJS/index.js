new gridjs.Grid({
    columns: ['nombre','ap_paterno','ap_materno','edad','domicilio','ciudad','estado','codigo_postal','correo','curp,rfc'],
    server:{
        url: 'http://localhost:8082/empleados/',
        then: data => data.map((user) => [
            user.nombre,user.ap_paterno,user.ap_materno,user.edad,user.domicilio,user.ciudad,user.estado,user.codigo_postal,user.correo,user.curp,user.rfc
        ]
            
            )
    }
  }).render(document.getElementById("wrapper"));