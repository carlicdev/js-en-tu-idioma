import { Html } from "@react-email/html"
import { Text } from "@react-email/text"
import { Button } from "@react-email/button"

export function Email({url}) {
    return (
        <Html lang='en'>
            <Text>Bienvenido a nuestro boletín informativo.</Text>
            <Text>Recibiras las últimas noticias de JavaScript directamente en tu correo.</Text>
            <Button href={url} pX={12} pY={12}  style={{backgroundColor: '#292524', color: '#fafaf9'}}>
                Ir a nuestro sitio
            </Button>
        </Html>
    )
}