import _ from 'lodash';
import htmlParse from 'html-react-parser';

export default function HTMLParser({ children }) {
    if(_.isEmpty(children)) {
        return;
    }

    return (
        <>
        {htmlParse(children)}
        </>
    );
}