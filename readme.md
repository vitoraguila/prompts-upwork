# OpenAI Prompting - Upwork

Project prepared to be run as a Vercel serverless function - For easy testing

## Changes
[x] - A new step added in the end for rewritting the answer in a friendly way
[x] - English prompts added to rewrite (for that case english prompts are better)
[x] - New prompts considering the persona documentation provided
[x] - Humanhumanized answers (`src/prompts/shared/system.js`)
[x] - Ramdomize the answers to avoid repeated the exactly same sentences
[x] - Isolated relevant logic
[x] - Refactored code base 
[x] - Concern separation

| File/Folder  | Details |
| ------------- | ------------- |
| api/chat.js |  Main logic is inside, there is a comment showing where start and where ends to copy |
| src/* |  All files in that folder are important, contains the logic isolation, project standards, refactoring |


## Setup
1 - Create .env file in the root repository with the open ai key
```
OPENAI_API_KEY=
```
2 - Setup vercel account and vercel SDK

3 - Use the command `vercel dev` to run locally

## Future improvements
[ ] - Use some in-memory DB to store answers and informations about that user. This way once the user is back to the conversation after few days we can send some message like "welcome back", "nice talk to you again", "glad to see you". Can be more human being if store more data from the users. This will be a big step to map all those feedbacks.

## Benchmark

`Input: ola soy de cuba necessito ayuda. No puedo costearme el curso`
| Before  | Now |
| ------------- | ------------- |
| Precisamente porque no tienes suficiente dinero deberías intentar romper este bucle, y la mejor forma de hacerlo es a través de nuestro programa. Piensa que no es un gasto, sino una inversión: cuando ganes 1.000 usd /mes en remoto, ese dinero lo vas a recuperar y duplicar ya en el primer mes de trabajo. Muchos piden dinero prestado para un viaje, o para comprarse un celular… cosas que consideran importantes para ellos. Así que, ¿por qué no pedir un préstamo para algo tan importante como tu propia formación profesional? Cualquier persona que te quiera, estaría encantada de prestarte dinero si le explicas que es para aprender a trabajar desde casa y para poder darle una mejor calidad de vida a tu familia… ¡Y más sabiendo que, una vez ganes en dólares, podrás devolvérselo con facilidad!  | Entendemos que enfrentar la situación financiera actual puede ser un desafío, especialmente cuando se busca equilibrar las responsabilidades familiares con las aspiraciones profesionales. Sin embargo, considerar la inversión en tu desarrollo profesional no solo es un acto de valentía sino también un paso estratégico hacia una estabilidad financiera mejorada. \n\nInvertir en un programa que te capacite para trabajar de manera remota es más que un gasto; es abrir la puerta a oportunidades que pueden cambiar significativamente tu vida y la de tu familia. Al alcanzar un ingreso de 1.000 USD al mes, no solo recuperarás tu inversión inicial, sino que también comenzarás a ver cómo tu esfuerzo se traduce en una vida más plena y segura.\n\nSabemos que pedir un préstamo puede parecer intimidante, pero recuerda que estás invirtiendo en tu futuro. Al igual que muchas personas solicitan financiamiento para adquirir bienes que mejoran su calidad de vida, invertir en tu educación y habilidades profesionales tiene un retorno invaluable. Además, al explicar a tus seres queridos el impacto positivo que este paso tendrá en tu vida, es probable que reciban tu solicitud de apoyo con entusiasmo.\n\nEstamos aquí para ayudarte a navegar por este camino, ofreciéndote las herramientas y el conocimiento necesario para que puedas alcanzar tus metas. Recuerda, no estás solo/a en este viaje. Juntos, podemos trabajar hacia un futuro donde tu bienestar financiero y personal vayan de la mano.  |

--- 

`Input: De verdad voy a ganar 1000 dolares al mes con este curso??`
| Before  | Now |
| ------------- | ------------- |
| Aunque el programa se enfoca en darte las herramientas necesarias para ganar 1.000 dólares al mes empezando desde 0, a medida que vayas adquiriendo habilidades y experiencia en las plataformas, podrás subir tus tarifas e incrementar bastante esa cifra con el tiempo. De hecho, en el mismo programa te enseñamos cómo hacerlo. Y si no partes desde 0 y ya cuentas con habilidades más especializadas, podrás lograrlo mucho más rápido. Eso sí, para ello deberás poner tu constancia, compromiso y dedicación: recuerda que nosotros te damos las herramientas, pero los resultados dependen siempre de tu implicación. | Entendemos que el camino hacia la estabilidad financiera puede parecer cuesta arriba, especialmente cuando se busca equilibrar las responsabilidades familiares con las aspiraciones profesionales. Pero aquí estamos para apoyarte, recordándote que no estás sola en esta travesía. Con el programa diseñado para ayudarte a alcanzar una meta inicial de 1.000 dólares al mes, queremos reafirmar que, con las herramientas adecuadas y una dosis de perseverancia, tus esfuerzos pueden florecer en éxito tangible.\n\nSabemos que cada uno parte de un punto diferente, con habilidades variadas y experiencias únicas. Si ya tienes habilidades especializadas, te alegrará saber que podrías avanzar a pasos agigantados hacia tus metas financieras. Pero incluso si estás empezando desde cero, no hay límite para lo que puedes lograr con compromiso y dedicación. En el programa, no solo te equipamos con las herramientas necesarias, sino que también te guiamos en cómo incrementar tus tarifas y, con ello, tus ingresos, a medida que creces profesionalmente.\n\nRecuerda, el éxito en este viaje depende en gran medida de tu implicación. Nosotros te proporcionamos el camino, pero eres tú quien debe caminarlo. Con constancia, compromiso y dedicación, no hay meta que esté fuera de tu alcance. Estamos aquí para ayudarte a cada paso del camino, asegurándonos de que tengas todo lo necesario para triunfar. |

--- 

`Input: Entonces no me lo pueden carantizar ustedes. No me van da dar trabajo??`
| Before  | Now |
| ------------- | ------------- |
| Entiendo tus preocupaciones. Nuestro programa está diseñado para darte todas las herramientas y conocimientos necesarios para que puedas encontrar trabajo en línea por tu cuenta. Aunque no podemos garantizar un empleo directo, te aseguramos que si sigues paso a paso las indicaciones de Johanna y aplicas lo aprendido, tendrás una alta probabilidad de conseguir trabajo en las plataformas de trabajo virtual. Además, ofrecemos una garantía de satisfacción y otra de resultados para que puedas probar el curso sin riesgos. Si tienes más dudas o necesitas más información, estamos aquí para ayudarte. | Entendemos tus preocupaciones y estamos aquí para apoyarte. Nuestro programa está diseñado para brindarte todas las herramientas y conocimientos necesarios para que puedas encontrar trabajo en línea por tu cuenta. Aunque no podemos garantizar un empleo directo, te aseguramos que, siguiendo paso a paso las indicaciones y aplicando lo aprendido, tendrás una alta probabilidad de conseguir trabajo en las plataformas de trabajo virtual. Además, ofrecemos garantías de satisfacción y de resultados para que puedas probar el curso sin riesgos. Si tienes más dudas o necesitas más información, recuerda que no estás solo(a) y estamos aquí para ayudarte. |
