import {FC, ReactNode} from "react";
// import styles from './MyComponent.module.css';
// import './MyComponents.css';

type MyComponentPropType = { text: string; children?: ReactNode };

const MyComponent: FC<MyComponentPropType> = ({text, children}) => {
    return (
        // <div className={styles.target}>
        //     {text}
        // </div>

        // <div className='target'>
        //     {text}
        // </div>

        <div className='target'>
            <h2>{text}</h2>
            <p>{children}</p>
        </div>
    );
};

export default MyComponent;
