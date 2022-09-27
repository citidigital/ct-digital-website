export const applyWhiteSpace = (text) => {
    return text.split("\n").map((i,key) => {
        return <p key={key}>{i}</p>;
    })
}