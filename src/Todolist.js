import React from "react";
import {Component} from "react";
import {Fragment} from "react";
import TodoItem from "./TodoItem";
import './style.css'
class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: ['学英语']
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)
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
                        onChange={this.handleInputChange}
                    />
                <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <div>
                                    <TodoItem
                                        content={item}
                                        index={index}
                                        deleteItem = {this.handleItemDelete}
                                    />
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
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
