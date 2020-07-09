import { CollectionView } from 'nativescript-collectionview';
export function install() {
    CollectionView.registerLayoutStyle('waterfall', {
        createLayout: (collectionview: CollectionView) => new androidx.recyclerview.widget.StaggeredGridLayoutManager(1, 1),
    });
}
