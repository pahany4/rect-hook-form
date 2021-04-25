import {useForm} from 'react-hook-form';
import './App.css';
import {Button, TextField} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {useState} from "react";
import {apiAddress} from "./API/api";
import Dialog from '@material-ui/core/Dialog';

function App2() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    /* Хук useForm */
    const {
        register,
        handleSubmit,
        formState: {errors, submitCount},
        watch
    } = useForm({mode: 'onChange'})

    /* Функция для отправки данных на сервер */
    const onSubmit = (data) => {
        setOpen(true)
    }

    /* Локальный state для списка городов */
    const [listCity, setListCity] = useState([])
    const [citySelect, setCitySelect] = useState([])

    /* Получение массива списка городов и запись его в локальный state */
    const ListCity = (city) => {
        if (city.length >= 1) {
            apiAddress.searchLocality(city, 10).then(response => {
                setListCity(response.data);
            })
        }
    }

    const updateCity = (city, listCity) => {
        if (city && city.length >= 1) {
            apiAddress.searchLocality(city, 1).then(response => {
                setCitySelect(response.data[0]);
            })
        }
    }

    /* слежка за полями формы для валидации */
    const name = watch('name');
    const age = watch('age');
    const email = watch('email');
    const city = watch('city');

    /* Условие, при котором кнопка отправки на сервер будет не активна */
    const disableButton = !age || !name || !email || Object.keys(errors).length > 0
    return (
        <div style={{margin: 'auto', width: "50vw"}}>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div style={{padding: 40}}>
                    <h3>Отправлено</h3>
                    <p>Имя: {name}</p>
                    <p>Возраст: {age}</p>
                    <p>Email: {email}</p>
                    <p>Город: {citySelect.full_title}</p>
                </div>

            </Dialog>
            <h1>Форма</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

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
                    <Autocomplete
                        disableListWrap={true}
                        id="combo-box-demo"
                        options={listCity.map((option) => option.full_title)}
                        fullWidth={true}
                        renderInput={(params) => <TextField {...params}
                                                            {...register('city', {

                                                            })}

                                                            onChange={(e) => {
                                                                ListCity(e.target.value)

                                                            }} label="Город отправки груза"
                                                            variant="outlined"/>}
                        noOptionsText={'Нет такого города'}
                        onChange={(event) => {
                            console.log("change")
                            updateCity(event.target.valueOf().innerText, listCity)
                        }}
                    />
                </div>

                <div style={{marginBottom: 30}}>
                    <Button
                        disabled={disableButton}
                        type={'submit'}
                        variant="contained" color="primary">
                        отправить
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default App2;
