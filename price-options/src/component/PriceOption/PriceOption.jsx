import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div>
            <h2>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;