export default function CategoryButton({name, onCategoryButtonClick, selectedCategory}) {
    return (
        <button key={name} className={`category-btn ${selectedCategory === name ? 'category-btn-active' : ''}`} onClick={onCategoryButtonClick}>
            {name}
        </button>
    )
}