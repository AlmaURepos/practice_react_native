function AddArticle({
    name,
    title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickedadd,
}) {
    return (
        <section>
            <h2>{name}</h2>
            <input type="text" placeholder="Title" value={title} onChange={onChangeTitle} />
            <input type="text" placeholder="Summary" value={summary} onChange={onChangeSummary} />
            <button onClick={onClickedadd}>Add</button>
                    </section>
    )
}

export default AddArticle;