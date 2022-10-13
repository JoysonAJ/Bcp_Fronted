import comments from "../../extraTest/community.json";
export function Community() {
    const displayQuestions = comments.map(
        (info) => {
            return (
                <>
                    <div className="card" style={{ width: "18rem" }}>
                        {info.map(
                            (view) => {
                                if (view.question) {
                                    return (
                                        <>

                                            <div className="card-body">
                                                <h5 className="card-title">{view.question_by}</h5>
                                                <p className="card-text">{view.question}</p>
                                            </div>

                                        </>
                                    );
                                }
                                else {
                                    return (<>
                                        {
                                            view.map(
                                                (ans) => {
                                                    return (
                                                        <>
                                                            <div class="card-body">
                                                                <blockquote class="blockquote mb-0">
                                                                    <p>{ans.answer}</p>
                                                                    <footer class="blockquote-footer">{ans.answer_by}</footer>
                                                                </blockquote>
                                                            </div>

                                                        </>
                                                    );
                                                }
                                            )
                                        }
                                    </>
                                    );


                                }
                            }
                        )}
                    </div>
                </>
            );
        }
    )
    return (
        <>
            {displayQuestions}
        </>
    );
}