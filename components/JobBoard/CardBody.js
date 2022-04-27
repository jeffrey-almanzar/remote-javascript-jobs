import _ from 'lodash';
import HTMLParser from "../HTMLParser";

export default function CardBody({content}) {
    if(_.isEmpty(content)) {
        return;
    }

    return (
        <div className='rdw-editor-main'>
            <HTMLParser>{content}</HTMLParser>
        </div> 
    );
}