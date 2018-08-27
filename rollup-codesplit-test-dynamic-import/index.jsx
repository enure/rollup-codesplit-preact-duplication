import { h, Component } from 'preact';
import { Shared } from 'rollup-codesplit-test-shared/index.jsx';

class Foo extends Component {
  render() {
    return <div><Shared/></div>;
  }
}