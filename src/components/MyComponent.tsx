import {FC} from "react";
// import styles from './MyComponent.module.css';
// import './MyComponent.css';

type MyComponentPropType = { text: string };

const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return (
        // <div className={'target'}>
        //     {text}
        // </div>
        <div className='text-3xl font-bold underline'>
            {text}
        </div>
    );
};

export default MyComponent;
