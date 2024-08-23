// main imports
import * as React from "react";
import { graphql } from "gatsby";

// plugin imports
import { useLocation } from "@reach/router";
import { Trans } from "react-i18next";

// style imports
import "../legal.scss";

// components imports
import Layout from "../../../components/Layout/Layout.js";
import Seo from "../../../components/Seo/Seo.js";
import {
	addCookies,
	getCookie,
	rejectCookies,
} from "../../../components/Layout/CookiesBanner";

// svg imports

// page
export default function IndexPage() {
	const location = useLocation();

	const [cookies, setCookies] = React.useState(getCookie("cookiesAccepted"));

	React.useEffect(() => {
		// console.log("useEffect running");
		// we have to do this inside the useEffect to prevent Date mismatches from server to client
		const expiry = new Date();
		expiry.setTime(expiry.getTime() + 365 * 24 * 60 * 60 * 1000);

		if (cookies) {
			// if cookies are accepted and have not been previously added, store them
			addCookies(expiry, location);
		}

		if (!cookies) {
			// if cookies are disabled, remove them
			rejectCookies(expiry);
		}
	}, [cookies, location]);

	return (
		<Layout>
			<Seo title={"Cookies"} />
			<div className="bodytext">
				<Trans i18nKey={"cookiesText"}>
					<h2 className="boxxy">Política de cookies</h2>
					<p>
						De conformidad con la normativa española que regula el uso de
						cookies en relación a la prestación de servicios de la sociedad de
						la información, recogida en el apartado segundo del artículo 22 de
						la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la
						información y de comercio electrónico, tras su modificación por el
						Real Decreto Ley 13/2012 del 30 de marzo, le informamos sobre las
						cookies utilizadas en el sitio web www.epicboutiquefitness.com y el
						motivo de su uso. Asimismo, le informamos que de conformidad con la
						ley (i) el USUARIO da su consentimiento para poder utilizarlas si
						modifica la configuración de su navegador deshabilitando las
						restricciones que impiden la entrada de cookies y (ii) que el
						referido consentimiento no será preciso para la instalación de
						aquellas cookies que sean estrictamente necesarias para la
						prestación de un servicio expresamente solicitado por el USUARIO.
					</p>
					<h3>¿Qué son las cookies?</h3>
					<p>
						Las cookies son pequeños archivos de texto que se instalan en el
						navegador del ordenador del USUARIO para registrar su actividad
						enviando una identificación anónima que se almacena en el mismo, con
						la finalidad de que la navegación sea más sencilla, permitiendo por
						ejemplo, el acceso a los USUARIOS que se hayan registrado
						previamente, el acceso a las áreas, servicios o promociones
						reservados exclusivamente a ellos sin tener que registrarse en cada
						visita. Se pueden utilizar también para medir la audiencia,
						parámetros del tráfico y navegación, tiempo de sesión, y/o controlar
						el progreso y número de entradas. Las cookies se asocian únicamente
						a un usuario anónimo y su ordenador o dispositivo y no proporcionan
						referencias que permitan conocer sus datos personales.
					</p>
					<h3>Tipos de cookies</h3>
					<p>
						1.- Cookies propias: Son aquéllas que se envían al equipo terminal
						del usuario desde un equipo o dominio gestionado por el propio
						editor y desde el que se presta el servicio Solicitado por el
						usuario.
						<br></br>
						2.- Cookies de terceros: Son aquéllas que se envían al equipo
						terminal del usuario desde un equipo o dominio que no es gestionado
						por el editor, sino por otra entidad que trata los datos obtenidos
						través de las cookies.
						<br></br>3.- Cookies de sesión: Son un tipo de cookies diseñadas
						para recabar y almacenar datos mientras el usuario accede a una
						página web.
						<br></br>4.- Cookies persistentes: Son un tipo de cookies en el que
						los datos siguen almacenados en el terminal y pueden ser accedidos y
						tratados durante un periodo definido por el responsable de la
						cookie, y que puede ir de unos minutos a varios años.
						<br></br>
						5.-Cookies técnicas: Son aquellas que permiten al usuario la
						navegación a través de una página web y la utilización de las
						diferentes opciones o servicios que en ella existan como, por
						ejemplo, controlar el tráfico y la comunicación de datos,
						identificar la sesión, acceder a partes de acceso restringido,
						recordar los elementos que integran un pedido, almacenar contenidos
						para la difusión de videos o sonido o compartir contenidos a través
						de redes sociales.
						<br></br>
						6.- Cookies de personalización: Son aquellas que permiten al usuario
						acceder al servicio con algunas características de carácter general
						predefinidas en función de una serie de criterios en el terminal del
						usuario como por ejemplo serían el idioma, el tipo de navegador a
						través del cual accede al servicio, etc.
						<br></br>
						7.- Cookies de análisis: Son aquéllas que bien tratadas por nosotros
						o por terceros, nos permiten cuantificar el número de usuarios y así
						realizar la medición y análisis estadístico de la utilización que
						hacen los usuarios del servicio ofertado. Para ello se analiza su
						navegación en nuestra página web con el fin de mejorar la oferta de
						productos o servicios que le ofrecemos.
						<br></br>
						8.- Cookies publicitarias: Son aquéllas que permiten la gestión, de
						la forma más eficaz posible, de los espacios publicitarios que, en
						su caso, el editor haya incluido en una página web, aplicación o
						plataforma desde la que presta el servicio solicitado en base a
						criterios como el contenido editado o la frecuencia en la que se
						muestran los anuncios.
						<br></br>
						9.- Cookies de publicidad comportamental: Son aquéllas que permiten
						la gestión, de la forma más eficaz posible, de los espacios
						publicitarios que, en su caso, el editor haya incluido en una página
						web, aplicación o plataforma desde la que presta el servicio
						solicitado. Estas cookies almacenan información del comportamiento
						de los usuarios obtenida a través de la observación continuada de
						sus hábitos de navegación, lo que permite desarrollar un perfil
						específico para mostrar publicidad en función del mismo.
					</p>
					<h3>Tipos de cookies utilizadas por este sitio web</h3>
					<p>
						Las cookies utilizadas en nuestro sitio web, son de sesión y de
						terceros, y nos permiten almacenar y acceder a información relativa
						al idioma, el tipo de navegador utilizado, y otras características
						generales predefinidas por el usuario, así como, seguir y analizar
						la actividad que lleva a cabo, con el objeto de introducir mejoras y
						prestar nuestros servicios de una manera más eficiente y
						personalizada EI8HT SQUAD SLU no utiliza cookies publicitarias o de
						publicidad comportamental. La utilización de las cookies ofrece
						ventajas en la prestación de servicios, puesto que, facilita al
						usuario la navegación y el acceso a los diferentes servicios que
						ofrece este sitio web; evita al usuario tener que configurar las
						características generales predefinidas cada vez que accede al sitio
						web; favorece la mejora del funcionamiento y de los servicios
						prestados a través de este sitio web, tras el correspondiente
						análisis de la información obtenida a través de las cookies
						instaladas.
					</p>
					<table>
						<tr>
							<th>Cookie</th>
							<th>Nombre</th>
							<th>Tipo</th>
							<th>Finalidad</th>
							<th>Duración</th>
							<th>Más info</th>
						</tr>
						<tr>
							<td rowspan="6">epicboutiquefitness.com</td>
							<td>_fbp</td>
							<td>De terceros: Facebook</td>
							<td>
								Utilizado por Facebook para ofrecer una serie de productos
								publicitarios, como ofertas en tiempo real de terceros
								anunciantes.
							</td>
							<td>3 meses</td>
							<td></td>
						</tr>
						<tr>
							<td>cookie_notice_accepted</td>
							<td>Técnica</td>
							<td>
								Esta cookie recuerda si se ha aceptado el mensaje de aviso sobre
								cookies para dejar de mostrarlo durante el tiempo en que esté
								activa
							</td>
							<td>1 mes</td>
							<td></td>
						</tr>
						<tr>
							<td>_ga_MTMKR0SK91</td>
							<td rowspan="3">De terceros: Google Analytics</td>
							<td>
								Se usa para diferenciar entre usuarios y sesiones. La cookie se
								crea al cargar la librería javascript y no existe una versión
								previa de la cookie _ga. La cookie se actualiza cada vez que
								envía los datos a Google Analytics.
							</td>
							<td>2 años</td>
							<td rowSpan="3">
								<a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookieusage?hl=es-419">
									Link
								</a>
							</td>
						</tr>
						<tr>
							<td>_gat_UA-192041593-1</td>
							<td>
								Se usa para diferenciar entre los diferentes objetos de
								seguimiento creados en la sesión. La cookie se crea al cargar la
								librería javascript y no existe una versión previa de la cookie
								_gat. La cookie se actualiza cada vez que envía los datos a
								Google Analytics.
							</td>
							<td>1 minuto</td>
						</tr>
						<tr>
							<td>_gid</td>
							<td>Se usa para distinguir a los usuarios</td>
							<td>1 día</td>
						</tr>
					</table>
					<p>
						NOTA: En alguna página de este sitio web se muestra contenido
						embebido o invocado a través del cual se pueden estar instalando
						cookies de terceros. Aunque la página es revisada cada cierto tiempo
						puede ser que el listado de cookies no esté actualizado. Si desea
						hacer alguna pregunta sobre las cookies que se instalan a través de
						este sitio web, contacte con nosotros
					</p>
					<h3>Deshabilitación de las cookies</h3>
					<p>
						Como usuario en todo momento podrá acceder a la configuración de su
						navegador aceptando o rechazando todas las cookies, o bien
						seleccionar aquéllas cuya instalación admite y cuáles no, siguiendo
						uno de los siguientes procedimientos, que depende del navegador que
						utilice:
						<br></br>
						Dado que cada navegador utiliza una manera diferente, la función
						ayuda de su navegador le indicará como hacerlo.
						<ul>
							<li>
								<a
									target={"_blank"}
									rel="noreferrer"
									href={`https://www.windows.microsoft.com/es-xl/internet-explorer/delete-managecookies#ie="ie-10"`}
								>
									Internet Explorer
								</a>
							</li>
							<li>
								<a
									target={"_blank"}
									rel="noreferrer"
									href={`https://www.support.mozilla.org/es/kb/Borrar%20cookies"`}
								>
									Firefox
								</a>
							</li>
							<li>
								<a
									target={"_blank"}
									rel="noreferrer"
									href={`https://www.support.google.com/chrome/answer/95647?hl="es"`}
								>
									Chrome
								</a>
							</li>
							<li>
								<a
									target={"_blank"}
									rel="noreferrer"
									href={`https://www.apple.com/es/privacy/use-of-cookies/"`}
								>
									Safari
								</a>
							</li>
						</ul>
						Todos los navegadores permiten cambiar la configuración de Cookies.
						Estos ajustes normalmente se encuentran en las 'opciones' o
						'Preferencias' del menú de su navegador.
						<br></br>A continuación, se ofrece información sobre los pasos para
						acceder al menú de configuración de las cookies y, en su caso, de la
						navegación privada en cada uno de los navegadores principales:
						<ul>
							<li>
								Internet Explorer: Herramientas {">"} Opciones de Internet {">"}
								Privacidad {">"} Configuración.
							</li>
						</ul>
						<ul>
							<li>
								Firefox: Herramientas {">"} Opciones {">"} Privacidad {">"}{" "}
								Historial {">"}
								Configuración Personalizada.
							</li>
						</ul>
						<ul>
							<li>
								Chrome: Configuración {">"} Mostrar opciones avanzadas {">"}
								Privacidad {">"} Configuración de contenido.
							</li>
						</ul>
						<ul>
							<li>Safari:Preferencias{">"}Seguridad.</li>
						</ul>
						Para cualquier consulta puede ponerse en contacto con nosotros en la
						siguiente dirección de correo:{" "}
						<a href="mailto:info@epicboutquefitness.com">
							info@epicboutquefitness.com
						</a>
					</p>
				</Trans>
				<p>
					Puede activar/desactivar las cookies usando los siguientes enlaces.
					Actualmente las cookies de Marketing están {cookies && "activadas"}
					{!cookies && "desactivadas"}. &emsp;
					<br />
					<button
						onClick={() => setCookies(true)}
						className={`boxxy ${cookies ? "unactive" : ""}`}
					>
						Activar cookies
					</button>
					<button
						onClick={() => setCookies(false)}
						className={`boxxy ${!cookies ? "unactive" : ""}`}
					>
						Desactivar cookies
					</button>
				</p>
			</div>
		</Layout>
	);
}

// graphql query
export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
