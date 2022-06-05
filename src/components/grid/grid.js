import Card from "../card/card"
import { getAll } from '../../services/guitarServices';
const { Component } = require("react");

export default class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listGuitar: []

        }



    }

    async componentDidMount() {
        await getAll().then(res => {
            this.setState({
                listGuitar: res.data.data
            }, () => {

            });

        })


    }

    render() {
        console.log("list", this.state.listGuitar);
        let listRender = this.state.listGuitar;
        return (
            <div className="container">
                <div className="row hidden-md-up mg">
                    {
                        listRender.map((item, index) => {
                            return (<Card
                                name={item.name}
                                price={item.price}
                                discount={item.discount}
                                content={item.contents}
                                views={item.views}
                                imageURL={item.imageURL} />)
                        })
                    }

                </div>
            </div>

        )
    }
}