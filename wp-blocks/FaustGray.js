import { gql } from "@apollo/client";

/**
 * Formed by capitalizing the first letter of each word in the block name
 * (including the namespace) and then removing non-alphanumeric characters:
 * faust/gray becomes FaustGray, foo/bar-baz becomes FooBarBaz
 */
const FaustGray = ( props ) => {
	console.log( 'frust', props );
	const { attributes } = props;

	return (
		<p
			style={{
				color: `${attributes.color}`
			}}
		>
			{ `The block had ${attributes.count} boxes.` }
		</p>
	);



}

export default FaustGray;

FaustGray.fragments = {
	entry: gql`
		fragment FaustGrayFragment on FaustGray {
			attributes {
				count
				color
			}
		}
	`,
	key: 'FaustGrayFragment'
};

