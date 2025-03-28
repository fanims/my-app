import React, { Fragment } from 'react'
import BoxCard from './BoxCard'
import TodoList from '../todolist/TodoList';
import StudentRecord from '../studentrecord/StudentRecord';

const listitems = [
    {
        image: 'https://cdn.pixabay.com/photo/2025/02/08/23/52/rainbow-lorikeet-9393478_1280.jpg',
        title: 'Box Title 1',
        description: 'Leo saepe, laborum repudiandae morbi iaculis suscipit arcu harum aliquet sociosqu nihil sapiente repellat, rutrum habitasse convallis accusantium     congue dapibus? Porttitor convallis? Harum ultrices? Laboriosam, diam. Eum ratione? Reprehenderit. Veniam.'

    },
    {
        image: 'https://cdn.pixabay.com/photo/2022/10/07/08/59/sky-7504583_1280.jpg',
        title: 'Box Title 2',
        description: 'Leo saepe, laborum repudiandae morbi iaculis suscipit arcu harum aliquet sociosqu nihil sapiente repellat, rutrum habitasse convallis accusantium     congue dapibus? Porttitor convallis? Harum ultrices? Laboriosam, diam. Eum ratione? Reprehenderit. Veniam.'

    },
    {
        image: 'https://cdn.pixabay.com/photo/2024/11/08/14/31/lighthouse-9183463_1280.jpg',
        title: 'Box Title 3',
        description: 'Leo saepe, laborum repudiandae morbi iaculis suscipit arcu harum aliquet sociosqu nihil sapiente repellat, rutrum habitasse convallis accusantium     congue dapibus? Porttitor convallis? Harum ultrices? Laboriosam, diam. Eum ratione? Reprehenderit. Veniam.'

    },
]

function BoxList() {
  return (
    <Fragment>
        <ul className='cards'>
            {
                listitems.map((item, index) => {
                    return (
                        <li key={index}>
                            <BoxCard listitems={item}/>
                        </li>
                    )
                })
            }
        </ul>
        <TodoList/>
        <StudentRecord/>
    </Fragment>
  );
}

export default BoxList;