import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const SignInComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    // API call to sign in
    const mutation = useMutation(data => {
        return axios.post('http://localhost:4001/api/auth/sign-in', data);
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
                <label>Password</label>
                <input type="password" {...register('password', { required: 'Password is required' })} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? 'Signing In...' : 'Sign In'}
            </button>
        </form>
    );

}

export default SignInComponent;


