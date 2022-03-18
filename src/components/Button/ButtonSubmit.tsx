import './ButtonSubmit.css'

export const ButtonSubmit = ({ handlerForm }: { handlerForm: () => void }) => {
    const submitButton = (e: any) => {
        e.preventDefault()
        handlerForm()
    }

    return (
        <>
            <div className="button-container">
                <button className="button-submit" onClick={submitButton}>
                    Buscar
                </button>
            </div>
        </>
    )
}
