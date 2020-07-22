# fleamarket_sample_79c DB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|nickname|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
|first_name|string|null: false|
|last_name|string|null: false|
|birth_day|integer|null: false|
|birth_month|integer|null: false|
|birth_year|integer|null: false|
|first_name_kana|string|null: false|
|last_name_kana|string|null: false|
|phone_number|string||
### Association
- has_many :posts dependent: :destroy
- has_one :address dependent: :destroy
- has_one :card dependent: :destroy

## addressesテーブル
|Column|Type|Option|
|------|----|------|
|postal_code|string|null: false|
|prefectures|string|null: false|
|city|string|null: false|
|address|string|null: false|
|apartment|string||
|user|references|null: false, foreign_key: true|
### Association
- belongs_to :user

## cardsテーブル
|Column|Type|Option|
|------|----|------|
|card_number|string|null: false|
|deadline_month|integer|null: false|
|deadline_year|integer|null: false|
|security_code|integer|null: false|
|user|references|null: false, foreign_key: true|
### Association
- belongs_to :user

## postsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false, add_index: true|
|text|text|null: false|
|condition|string|null: false|
|burden|string|null: false|
|area|string|null: false|
|day|string|null: false|
|price|string|null: false|
|user|references|null: false, foreign_key: true|
|category|references|null: false, foreign_key: true|
|brand|references|foreign_key: true|
### Association
- belongs_to :user dependent: :destroy
- belongs_to :category dependent: :destroy
- belongs_to :brand dependent: :destroy
- has_many :images dependent: :destroy

## categoriesテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
|ancestry|string|null: false|
### Association
- has_many :posts

## brandsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
### Association
- has_many :posts

## imagesテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null: false|
|post|references|null: false, foreign_key: true|
### Association
- belongs_to :post 

test