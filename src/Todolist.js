import React from "react";
import {Component} from "react";
import {Fragment} from "react";
import './style.css'
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['学英语']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor='insertArea'>输入内容</label>
                    <input
                        id='insertArea'
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                    />
                <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
            <ul>
                {
                    this.state.list.map((item,index) => {
                        return <li
                                key={index}
                                onClick={this.handleItemDelete.bind(this, index)}
                                dangerouslySetInnerHTML={{__html: item}}
                                ></li>
                        })
                }
            </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list,this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list: list
        })
    }
}
export default Todolist;
