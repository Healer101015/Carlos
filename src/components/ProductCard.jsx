import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { HeartIcon as HeartSolid, StarIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";

export default function ProductCard({
    product,
    onAddToCart,
    onToggleWishlist,
    wished = false,
    onQuickView,
}) {
    const price = product.price || 0;
    const hasDiscount = product.originalPrice && product.originalPrice > price;
    const discountPct = hasDiscount
        ? Math.round(((product.originalPrice - price) / product.originalPrice) * 100)
        : 0;

    return (
        <Card className="w-full mx-auto rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out transform hover:-translate-y-1 bg-white overflow-hidden relative">
            {/* Imagem com hover animado */}
            <div className="relative group">
                <CardHeader floated={false} shadow={false} className="h-56 overflow-hidden rounded-t-2xl">
                    <img
                        src={product.imageUrl || ""}
                        alt={product.name}
                        className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 ${!product.imageUrl ? "bg-gradient-to-br from-[#F5E6D3] to-[#D7B899] animate-pulse" : ""
                            }`}
                        loading="lazy"
                    />
                </CardHeader>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && (
                        <span className="bg-[#8B5E3C] text-white text-xs px-2 py-1 rounded-full font-semibold shadow-sm">
                            NOVO
                        </span>
                    )}
                    {hasDiscount && (
                        <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-sm">
                            -{discountPct}%
                        </span>
                    )}
                </div>

                {/* Wishlist */}
                <button
                    aria-label={wished ? "Remover da lista de desejos" : "Adicionar à lista de desejos"}
                    onClick={onToggleWishlist}
                    className="absolute top-3 right-3 p-1 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-md transition"
                >
                    {wished ? (
                        <HeartSolid className="w-5 h-5 text-red-500" />
                    ) : (
                        <HeartOutline className="w-5 h-5 text-[#6F472F]" />
                    )}
                </button>
            </div>

            {/* Conteúdo */}
            <CardBody className="p-5">
                <div className="mb-3 flex items-start justify-between gap-2">
                    <Typography className="font-semibold text-sm text-[#6F472F] line-clamp-2">
                        {product.name}
                    </Typography>

                    <div className="text-right">
                        <div className="text-[#8B5E3C] font-extrabold text-base">
                            R$ {price.toFixed(2)}
                        </div>
                        {hasDiscount && (
                            <div className="text-xs text-gray-400 line-through">
                                R$ {product.originalPrice.toFixed(2)}
                            </div>
                        )}
                    </div>
                </div>

                {/* Avaliação */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <StarIcon
                                key={i}
                                className={`w-4 h-4 ${i < (product.rating || 0) ? "text-[#D7B899]" : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">
                        ({product.reviewsCount || 0})
                    </span>
                </div>

                {/* Descrição */}
                <Typography variant="small" color="gray" className="text-sm opacity-80 line-clamp-2">
                    {product.description || "Sem descrição disponível."}
                </Typography>
            </CardBody>

            {/* Ações */}
            <CardFooter className="p-5 pt-0 border-t border-[#F5E6D3]">
                <div className="flex gap-3">
                    <Button
                        onClick={() => onAddToCart(product)}
                        fullWidth
                        className="bg-gradient-to-r from-[#8B5E3C] to-[#6F472F] hover:from-[#6F472F] hover:to-[#8B5E3C] text-white text-sm font-bold uppercase py-2 rounded-lg shadow-md transform hover:scale-[1.02] active:scale-[0.97] transition-all"
                    >
                        Adicionar
                    </Button>

                    <button
                        onClick={() => onQuickView && onQuickView()}
                        className="px-4 py-2 border-2 border-[#D7B899] text-[#6F472F] rounded-lg text-sm hover:bg-[#F5E6D3] hover:border-[#8B5E3C] transition-colors"
                        aria-label="Visualizar rapidamente"
                    >
                        Ver
                    </button>
                </div>
            </CardFooter>
        </Card>
    );
}
