import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
        author="Lucas Passos"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptate veniam nihil deleniti voluptatibus totam qui architecto similique. Nam magni molestiae error fuga deserunt accusamus ad non fugit vel nostrum?"
      />
      <Post
        author="Mateus Passos"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis voluptate veniam nihil deleniti voluptatibus totam qui architecto similique. Nam magni molestiae error fuga deserunt accusamus ad non fugit vel nostrum?"
      />
        </main>
      </div>
    </div>
  )
}


