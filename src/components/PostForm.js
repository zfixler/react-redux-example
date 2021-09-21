import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

class PostForm extends Component {
    constructor(){
        super()
        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }    

    
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post)

        this.setState({
            title: '',
            body: ''
        })
    }
        render() {
            return (
                <form className="postForm" onSubmit={this.onSubmit}>
                    <label htmlFor="title">Post Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                    <label htmlFor="body">Post Body</label>
                    <textarea name="body" cols="30" rows="10" value={this.state.body} onChange={this.onChange}></textarea>
                    <button type="submit">Post</button>
                </form>
            )
        }
    }

export default connect(null, { createPost })(PostForm)