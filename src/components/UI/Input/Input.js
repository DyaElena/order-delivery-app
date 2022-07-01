import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
    /* spread  operator makes sure that all properties were added to <input/> tag*/
  );
};

export default Input;
