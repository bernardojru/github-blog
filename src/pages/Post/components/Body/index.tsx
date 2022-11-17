import {Content} from './styles'

interface IBody {
    body: string
    title: string
}

interface BodyProps {
    content: IBody
}

export function Body ({content}: BodyProps) {
    return (
        <Content>
            {content.body}
        </Content>
    )
}