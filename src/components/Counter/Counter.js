import React from 'react';
import './Counter.css';

class Counter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    render() {
        return(

            <div className='Counter-Heading'>
                <h2 onChange={this.minus}>Counter</h2>
                <div className='Counter'>
                    <h1>{this.state.count}</h1>
                    <div className='Buttons'>
                        <button style={{padding: '6px 12px', 
                                        border: '1px solid red',
                                        borderRadius: '20px',
                                        marginRight: '10px',
                                        cursor:'pointer'}} 
                        className='Btn' onClick={this.decrement}>Decrement</button>
                        <button style={{padding: '6px 12px', 
                                        border: '1px solid red',
                                        borderRadius: '20px',
                                        marginRight: '10px',
                                        cursor:'pointer'}} 
                        className='Btn' onClick={this.clear}>Reset</button>
                        <button style={{padding: '6px 12px', 
                                        border: '1px solid red',
                                        borderRadius: '20px',
                                        cursor:'pointer'}} 
                        className='Btn' onClick={this.increment}>Increment</button>
                    </div>
                </div> 
            </div>
        );
    }

    increment = () => {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    decrement = () => {
        this.setState(state => ({
            count: state.count - 1
        }));
    }

    clear = () => {
        this.setState({ 
            count: 0
    });
    }

}

export default Counter;


