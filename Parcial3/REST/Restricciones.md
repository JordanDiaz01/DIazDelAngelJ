
# Restricciones REST

REST (Representational State Transfer) es un estilo arquitectónico ampliamente utilizado para diseñar y desarrollar servicios web. Se basa en un conjunto de restricciones que ayudan a garantizar la interoperabilidad, la escalabilidad y la simplicidad en los sistemas distribuidos. A continuación, se presentan las principales restricciones de REST:

1. **Cliente-servidor**: REST establece una clara separación entre el cliente y el servidor. El cliente es responsable de la interfaz de usuario y la interacción con el usuario, mientras que el servidor se encarga del almacenamiento y la gestión de los datos. Esta separación permite que los componentes evolucionen de forma independiente y mejora la escalabilidad del sistema.

2. **Sin estado**: Cada solicitud que realiza el cliente al servidor debe contener toda la información necesaria para comprender y procesar la solicitud. El servidor no debe mantener ningún estado de sesión entre solicitudes, lo que significa que cada solicitud debe ser completamente independiente. Esto facilita la escalabilidad del sistema, ya que cada solicitud puede ser gestionada de forma aislada.

3. **Cacheable**: REST permite que las respuestas del servidor se almacenen en caché en el cliente o en intermediarios, como servidores proxy. Esto mejora la eficiencia y el rendimiento, ya que las solicitudes posteriores pueden ser satisfechas mediante el uso de la copia en caché, en lugar de volver a solicitar los mismos datos al servidor.

4. **Interfaz uniforme**: REST define una interfaz uniforme entre el cliente y el servidor. Esta interfaz consiste en un conjunto de operaciones bien definidas que se aplican a los recursos. Las operaciones comunes en REST son GET (obtener), POST (crear), PUT (actualizar) y DELETE (eliminar). La interfaz uniforme simplifica la arquitectura y permite que los componentes se comuniquen de manera efectiva.

5. **Sistema de capas**: REST permite la inclusión de capas adicionales, como servidores proxy o sistemas de almacenamiento en caché, entre el cliente y el servidor. Esto proporciona una mayor flexibilidad, ya que las capas pueden proporcionar funcionalidades adicionales, como la seguridad o el rendimiento, sin afectar la interfaz uniforme.

6. **Código bajo demanda (opcional)**: Esta restricción es opcional en REST. Permite que el servidor envíe código ejecutable al cliente, como scripts JavaScript, que pueden ser ejecutados dentro del contexto del cliente. Esta capacidad amplía la funcionalidad del cliente de forma dinámica, pero también aumenta la complejidad y la dependencia del cliente en el servidor.

Estas restricciones en conjunto definen los principios fundamentales de REST y permiten la creación de servicios web que sean escalables, interoperables y fáciles de mantener. Al seguir estas restricciones, se puede lograr un diseño coherente y una arquitectura robusta en los sistemas distribuidos.
