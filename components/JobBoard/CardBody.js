import _ from 'lodash';
import DOMPurify from 'isomorphic-dompurify';


import HTMLParser from "../HTMLParser";

export default function CardBody({content}) {
    if(_.isEmpty(content)) {
        return;
    }

    return (
        <div className='editor'>
            <HTMLParser>{DOMPurify.sanitize(content)}</HTMLParser>
        </div> 
    );
}