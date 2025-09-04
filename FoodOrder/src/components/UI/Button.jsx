export default function Button({ children, textOnly, className, ...props }) {

    let cssClass = className;
     cssClass += textOnly ? ' text-button' : ' button';

    return <button {...props} className={cssClass}>{children}</button>
}