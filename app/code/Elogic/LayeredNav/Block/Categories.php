<?php
namespace Elogic\LayeredNav\Block;


class Categories extends \Magento\Framework\View\Element\Template
{
    protected $_categoryFactory;

    /**
     * @param \Magento\Framework\View\Element\Template\Context $context
     * @param array $data
     */
    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magento\Catalog\Model\CategoryFactory $categoryFactory,
        array $data = []
    ) {
        $this->_categoryFactory = $categoryFactory;
        parent::__construct($context, $data);
    }

    /**
     * Get children categories
     *
     * @param $categoryId Parent category id
     * @return Magento\Catalog\Model\ResourceModel\Category\Collection
     */
    public function getChildCategories($categoryId)
    {

        $_category = $this->_categoryFactory->create();

        $category = $_category->load($categoryId);

        //Get category collection
        $collection = $category->getCollection()
            ->addIsActiveFilter()
            ->addAttributeToFilter('include_in_menu', 1)
            ->addAttributeToSelect('*')
            ->setOrder('position','ASC')
            ->addIdFilter($category->getChildren());
        return $collection;
    }
}

