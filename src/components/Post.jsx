
import { Avatar } from './Avatar';
import { Comment }  from './Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header >
                <div className={styles.author}>
                    <Avatar src="https://github.com/lpassos40.png" />
                    <div className={styles.authorInfo}>
                        <strong>Lucas Passos</strong>
                        <span>Junior Web Developer</span>
                    </div>
                </div>

                <time title='28 de Dezembro às 15:50' dateTime='2022-12-28 15:48:40'>Publicado há 1hr</time>
            </header>

            <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p><a href=''> jane.design/doctorcare</a></p>
            <p><a href=''>#novoprojeto</a> {' '}
            <a href=''>#nlw</a> {' '}
            <a href=''>#rocketseat</a></p>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                   placeholder='Escreva um comentário' 
                />

            <footer>
                <button type="submit">Publicar</button>
            </footer>

            </form>

            <div className={styles.commentList}>
              <Comment />
            </div>
        </article>
    );
}