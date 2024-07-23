import './WordInput.css'
import jsonData from '../the-tempest-word-list.json';

export function WordInput( { addWord, words, input, setInput, inputEnabled} ) {     

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    /*  Check if word in input was already found. If not, check if word was used in the play. If so, 
        add new word object to the list of found words */

    const handleSubmit = (e) => {
        e.preventDefault();
        if (words.length === 0 || words.findIndex((word) => word.value === input) === -1) {
            for (let i = 0; i < jsonData.length; i++) {
                if (jsonData[i].word === input) {
                    const word = {
                        id: input,
                        value: input,
                        count: jsonData[i].count
                    };
                    addWord(word);
                    setInput('');
                }
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={input}
                className="word-input"
                type="text"
                onChange={handleInputChange}
                disabled={inputEnabled ? false : true}
            />
        </form>
    );
}