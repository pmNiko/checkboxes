import { ProductCard, ProductImage, ProductTitle } from 'nkdev-product-card'
import { ItemProps, items } from './items'
import styles from './CardHelp.module.css'

export const CardHelp = () => {
    return (
        <div className={`${styles.containerCard} `}>
            {items.map(({ description, ...item }: ItemProps) => (
                <ProductCard product={item} className={styles.card} key={item.id + item.title}>
                    {() => (
                        <>
                            <ProductImage className={styles.image} />
                            <ProductTitle className={styles.title} />
                            <br />
                            <div className={styles.description}>
                                <p>{description}</p>
                            </div>
                        </>
                    )}
                </ProductCard>
            ))}
        </div>
    )
}
