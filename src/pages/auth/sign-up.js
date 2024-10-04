import React from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

const SignUpComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // API call to sign up
    const mutation = useMutation(data => {
        return axios.post('http://localhost:4001/api/auth/sign-up', data);
    });

    const onSubmit = (data) => {
        mutation.mutate(data, {
            onSuccess: (response) => {
                alert(response.data.message);
            },
            onError: (error) => {
                alert(error.response.data.message);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username</label>
                <input {...register('username', { required: 'Username is required' })} />
                {errors.username && <p>{errors.username.message}</p>}
            </div>

            <div>
                <label>Name</label>
                <input {...register('name', { required: 'Name is required' })} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
                <label>Password</label>
                <input type="password" {...register('password', { required: 'Password is required' })} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? 'Registering...' : 'Sign Up'}
            </button>
        </form>
    );

}

export default SignUpComponent;


