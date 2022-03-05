export default function Advice({advice}) {

    return (
        <article>
            <h3>Advice #{advice.id}</h3>
            <blockquote>
                <q>{advice.advice}</q>
            </blockquote>
        </article>
    )
}