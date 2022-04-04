import HTMLParser from "../HTMLParser";

export default function CardBody({content}) {
    return (
        <HTMLParser>{content}</HTMLParser>
    );
}