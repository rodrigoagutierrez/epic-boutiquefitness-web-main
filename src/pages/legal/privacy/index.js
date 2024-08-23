// main imports
import * as React from "react";
import { graphql } from "gatsby";

// plugin imports
import { Trans } from "react-i18next";

// style imports
import "../legal.scss";

// components imports
import Layout from "../../../components/Layout/Layout.js";
import Seo from "../../../components/Seo/Seo.js";

// svg imports

// page
export default function IndexPage() {
	return (
		<Layout>
			<Seo title={"Cookies"} />
			<div className="bodytext">
				<Trans i18nKey={"privacyText"}>
					<h2 className="boxxy">Política de privacidad</h2>
					<p>
						<b>1. DATOS IDENTIFICATIVOS</b>: En cumplimiento del deber de
						información recogido en el artículo 10 de la Ley 34/2002, de 11 de
						julio, de Servicios de la Sociedad de la Información y del Comercio
						electrónico, a continuación se reflejan los siguientes datos: la
						empresa titular de www.epicboutiquefitness.com es{" "}
						<b>
							<b>EI8HT SQUAD S.L.</b>
						</b>
						, con CIF número B40615262, y domicilio a estos efectos en C/
						Almirante Cadarso 15 bajo, 46005 Valencia con correo electrónico de
						contacto: admin@epicboutiquefitness.com
					</p>
					<p>
						<b>2. USUARIOS</b>: El acceso y/o uso de este portal atribuye la
						condición de USUARIO, que acepta, desde dicho acceso y/o uso, las
						Condiciones Generales de uso aquí reflejadas. Las citadas
						condiciones serán de aplicación independientemente de las
						Condiciones Generales de Contratación que en su caso resulten de
						obligado cumplimiento.
					</p>
					<p>
						<b>3. PROTECCIÓN DE DATOS DE CARÁCTER PERSONAL</b>:
						<br />
						Responsable: <b>EI8HT SQUAD S.L.</b>
						<br />
						Finalidad: Gestión de la solicitud
						<br />
						Legitimación: Ejecución de un contrato / prestación de servicios
						<br />
						Destinatarios: No se realizan cesiones de datos
						<br />
						Derechos: Puede ejercitar los derechos de acceso, rectificación,
						supresión, limitación, oposición y portabilidad de los datos
						aportados, como se indica en la información adicional.
						<br />
						Información Adicional: Puede consultar la información adicional y
						detallada sobre Protección de Datos a continuación.
						<br />
					</p>
					<p>
						<b>INFORMACIÓN DETALLADA PROTECCIÓN DE DATOS</b>
					</p>
					<p>
						<br />
						Responsable:
						<br />
						&emsp;¿Quién es el Responsable del tratamiento de sus datos?
						<br />
						&emsp;Identidad: <b>EI8HT SQUAD S.L.</b>
						<br />
						&emsp;Domicilio Social: C/ Almirante Cadarso 15 bajo, 46005,
						Valencia
						<br />
						&emsp;Telefono: 605868398
						<br />
						&emsp;Email: admin@epicboutiquefitness.com
					</p>
					<p>
						Finalidad:
						<br />
						&emsp;¿Con qué finalidad tratamos sus datos personales?
						<br />
						&emsp;En <b>EI8HT SQUAD S.L.</b>, tratamos la información que nos
						facilitan las personas interesadas con el fin de gestionar y
						tramitar los servicios solicitados. No se realizarán tratamientos de
						datos automatizados con el fin de elaborar perfiles.
						<br />
						&emsp;¿Por cuánto tiempo conservaremos sus datos?
						<br />
						&emsp;Los datos personales facilitados por el usuario se conservarán
						mientras no se solicite la supresión de los mismos por parte del
						interesado.
					</p>
					<p>
						Legitimación:
						<br />
						&emsp;La base legal para el tratamiento de sus datos es la ejecución
						de su solicitud, el desarrollo y ejecución de las relaciones
						contractuales y pre-contractuales establecidas con usted, así como
						el cumplimiento de obligaciones legales que le son de aplicación a
						<b>EI8HT SQUAD S.L.</b>
					</p>
					<p>
						Destinatarios:
						<br />
						&emsp;¿A qué destinatarios se comunicarán sus datos?
						<br />
						&emsp;<b>EI8HT SQUAD S.L.</b> no cederá sus datos a otras empresas,
						salvo a las Administraciones Públicas a las que se encuentre
						obligado por Ley.
					</p>
					<p>
						Derechos:
						<br />
						&emsp;El usuario podrá ejercer en todo momento los derechos de
						Acceso, Rectificación, Supresión, Limitación, Oposición y
						Portabilidad de los datos aportados, según lo dispuesto en el
						Reglamento General (UE) 2016/679 de Protección de Datos, y en la Ley
						Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
						Personales y garantía de los derechos digitales dirigiendo un
						escrito en que especifique que derecho desea ejercer y adjuntando
						copia de documento oficial que lo identifique dirigido a la
						dirección arriba indicada, o al correo electrónico
						admin@epicboutiquefitness.com Asimismo, el interesado puede
						presentar una reclamación ante la Autoridad de Control.
					</p>
					<p>
						En cumplimiento de lo establecido en el Reglamento General (UE)
						2016/679 de Protección de Datos, y en la Ley Orgánica 3/2018, de 5
						de diciembre, de Protección de Datos Personales y garantía de los
						derechos digitales, comunicamos al usuario que los datos personales
						que nos facilite de forma voluntaria , por cualquiera de nuestros
						medios de recogida de información, van a ser incorporados a las
						Actividades de Tratamiento automatizados de datos de carácter
						personal titularidad de <b>EI8HT SQUAD S.L.</b>, con el fin de poder
						prestarle nuestros servicios, así como para mantenerle informado
						sobre cuestiones relativas a la actividad de la empresa y sus
						servicios. Los campos marcados con “*” son de carácter obligatorio,
						por lo que la no cumplimentación de dichos campos impedirá al
						USUARIO disfrutar de algunos de los servicios e informaciones
						ofrecidas en la Web. Los datos contenidos en ellos serán tratados de
						forma confidencial. <b>EI8HT SQUAD S.L.</b> cumple íntegramente con
						la legislación vigente en materia de protección de datos de carácter
						personal, y con los compromisos de confidencialidad propios de su
						actividad.
					</p>
					<p>
						<b>EI8HT SQUAD S.L.</b> ha adoptado las medidas técnicas necesarias
						para mantener el nivel de seguridad requerido, según la naturaleza
						de los datos personales tratados y las circunstancias del
						tratamiento, con el objeto de evitar, en la medida de lo posible y
						siempre según el estado de la técnica, su alteración, pérdida,
						tratamiento o acceso no autorizado. Para la realización de la
						gestión antes mencionada puede ser necesario que se cedan los datos
						a encargados del tratamiento, empresas colaboradoras y
						administraciones públicas (las cuales pueden verificar la veracidad
						de los datos). En caso de que el USUARIO facilite datos de carácter
						personal, referentes a personas físicas distintas a sí mismo, el
						USUARIO deberá, con carácter previo a la inclusión, informarles del
						contenido de la presente clausula, de acuerdo con lo establecido en
						el Reglamento General (UE) 2016/679 de Protección de Datos, y en la
						Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
						Personales y garantía de los derechos digitales.
					</p>
					<p>
						<b>EI8HT SQUAD S.L.</b> como responsable de la Actividad de
						Tratamiento, garantiza el ejercicio de los derechos de acceso,
						rectificación, supresión, limitación, oposición y portabilidad de
						los datos aportados, según lo dispuesto en el Reglamento General
						(UE) 2016/679 de Protección de Datos, y en la Ley Orgánica 3/2018,
						de 5 de diciembre, de Protección de Datos Personales y garantía de
						los derechos digitales, el USUARIO podrá ejercer en todo momento los
						derechos, dirigiendo un escrito al domicilio social, adjuntando
						copia del DNI o Pasaporte.
					</p>
					<p>
						<b>EI8HT SQUAD S.L.</b> garantiza que todas las comunicaciones
						comerciales que dirige a sus clientes cumplen la normativa vigente.
					</p>
					<p>
						Por ello, en cumplimiento de la Ley 34/2002 de Servicios de la
						Sociedad de la Información y de Comercio Electrónico, y la Ley
						9/2014 General de Telecomunicaciones, se informa al USUARIO que
						<b>EI8HT SQUAD S.L.</b> podrá enviarle por medios electrónicos
						información acerca de productos y servicios de interés a lo que Ud.
						presta su consentimiento.
					</p>
					<p>
						En cualquier momento podrá revocar esta autorización en la dirección
						admin@epicboutiquefitness.com
					</p>
				</Trans>
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
