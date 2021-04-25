import {useForm} from 'react-hook-form';
import './App.css';
import {Button, TextField} from "@material-ui/core";

function App() {
    const {
        register,
        handleSubmit,
        formState: {errors, submitCount},
        watch
    } = useForm({mode: 'onChange'})
    const onsubmit = (data) => {

        console.log('send', data)
    }
    /* слежка за полями формы для валидации */
    const name = watch('name');
    const age = watch('age');
    const email = watch('email');
    //  console.log(errors)
    console.log(Object.keys(errors).length)
    const disableButton = !age || !name || !email || Object.keys(errors).length > 0
    return (
        <div style={{margin: 'auto', width: "50vw"}}>
            <h1>Форма</h1>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div style={{marginBottom: 30}}>
                    <TextField
                        {...register('name', {maxLength: 10})}
                        required
                        id="outlined-required"
                        label="Имя"
                        variant="outlined"
                    />
                    {errors.name && <p>не более 10 символов</p>}
                </div>
                <div style={{marginBottom: 30}}>
                    <TextField
                        error={errors.age}
                        {...register('age', {
                            required: true, pattern: /\d?\d/, min: 10, max: 99
                        })}

                        id="outlined-required"
                        label="Возраст"
                        variant="outlined"
                    />
                    {errors.age && <p>от 10 до 99</p>}
                </div>
                <div style={{marginBottom: 30}}>
                    <TextField
                        {...register('email', {
                            required: true,
                            pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                        })}
                        required
                        id="outlined-required"
                        label="Email"
                        variant="outlined"
                    />
                    {errors.email && <p>Введите корректный Email</p>}
                </div>



                <div style={{marginBottom: 30}}>

                </div>



                <div style={{marginBottom: 30}}>
                    <Button
                        /* disabled={Object.keys(errors).length === 0}*/
                        disabled={disableButton}
                        type={'submit'}
                        variant="contained" color="primary">
                        отправить
                    </Button>
                    <Button
                        /* disabled={Object.keys(errors).length === 0}*/
                        onClick={() => {
                            console.log(!age || !name || !email)
                            console.log(age, name, email, 'info')
                            console.log(errors)
                        }}
                        variant="contained" color="primary">
                        консоль
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default App;
