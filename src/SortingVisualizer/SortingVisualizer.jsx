import React from "react";
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.generateArray();
    }

    generateArray() {
        const array = [];
        for (let i = 0; i < 425; i++) {
            array.push(randomIntFromInterval(5, 900));
        }
        this.setState({array});
    }

    mergeSort() {}

    heapSort() {}

    quickSort() {}

    bubbleSort() {}

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div className="array-bar" key={idx} style={{height: `${value}px`}}></div>
                ))}
                <button onClick={() => this.generateArray()}>Generate New Array</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            </div>
        );
    }
}

//From stackoverflow.com
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}