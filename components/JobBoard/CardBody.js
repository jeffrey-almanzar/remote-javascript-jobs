import _ from 'lodash';
import HTMLParser from "../HTMLParser";

export default function CardBody({content}) {
    if(_.isEmpty(content)) {
        return;
    }

    return (
        <HTMLParser>{content}</HTMLParser>
    );
}