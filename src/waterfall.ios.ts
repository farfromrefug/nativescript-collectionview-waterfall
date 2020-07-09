import { CollectionView } from 'nativescript-collectionview';

type WaterfallCollectionView = CollectionView & UICollectionViewDelegate & CollectionViewWaterfallLayoutDelegate;
declare class IUICollectionViewWaterfallDelegateImpl extends NSObject {
    static new(): IUICollectionViewWaterfallDelegateImpl;
    _owner: WeakRef<WaterfallCollectionView>;
}
const UICollectionViewWaterfallDelegateImpl = (NSObject as any).extend(
    // _owner :WeakRef<CollectionView & UICollectionViewDelegate & WaterfallLayoutDelegate>,
    {
        collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath) {
            const owner = this._owner.get() as WaterfallCollectionView;
            if (owner) {
                owner.collectionViewWillDisplayCellForItemAtIndexPath(collectionView, cell, indexPath);
            }
        },
        collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath) {
            const owner = this._owner.get() as WaterfallCollectionView;
            if (owner) {
                return owner.collectionViewDidSelectItemAtIndexPath(collectionView, indexPath);
            }
            return indexPath;
        },
        collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath) {
            const owner = this._owner.get() as WaterfallCollectionView;
            if (owner) {
                return owner.collectionViewLayoutSizeForItemAtIndexPath(collectionView, collectionViewLayout, indexPath);
            }
            return CGSizeZero;
        },
        scrollViewDidScroll(scrollView: UIScrollView): void {
            const owner = this._owner.get() as WaterfallCollectionView;
            if (owner) {
                owner.scrollViewDidScroll(scrollView);
            }
        },
        scrollViewDidEndDecelerating(scrollView: UIScrollView) {
            const owner = this._owner.get() as WaterfallCollectionView;
            if (owner) {
                owner.scrollViewDidEndDecelerating(scrollView);
            }
        },
    },
    {
        protocols: [UICollectionViewDelegate, CollectionViewWaterfallLayoutDelegate],
    }
) as typeof IUICollectionViewWaterfallDelegateImpl;

export function install() {
    CollectionView.registerLayoutStyle('waterfall', {
        createLayout: (collectionview: CollectionView) => {
            const layout = CollectionViewWaterfallLayout.new();
            layout['columnCount'] = collectionview.computeSpanCount();
            // layout['minimumColumnSpacing'] = 12;
            // layout['minimumInteritemSpacing'] = 12;
            return layout;
        },
        createDelegate: () => UICollectionViewWaterfallDelegateImpl.new(),
    });
    CollectionView.registerPlugin('waterfall', {
        onLayout: (collectionview: CollectionView) => {
            const layout = collectionview.nativeViewProtected.collectionViewLayout;
            layout['columnCount'] = collectionview.computeSpanCount();
        },
    });
}
